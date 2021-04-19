import * as React from 'react';

// import { createInput, defaults, IInputState, IInputValue, IMaskItem, ISelectRange, IMaskedInput } from 'input-core';

const KEYBOARD = {
  BACKSPACE: 8,
  DELETE: 46,
};

export interface IInputProps {
  value?: string;
  mask?: string;
  maskChar?: string;
  maskFormat?: Array<IMaskItem>;
  maskString?: string;
  reformat?: (params: { value: Array<IInputValue> | string; input?: string; selection: ISelectRange }) => IInputState;
  defaultValue?: string;
  alwaysShowMask?: boolean;
  showMask?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  onValueChange?: (params: { maskedValue: string; value: string }) => void;
  getReference?: (el: HTMLInputElement) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  getApplyValueCallback?: (fn: (value: string) => void) => void;
  showStartChars?: boolean;
}

/**
 * React-MaskInput component
 * Params:
 * `mask`: String. Format:
 *   0 — any number 0-9
 *   * — any symbol
 *   a — A-Z, a-z
 *   q — "q" letter, 2 — "2" letter etc.
 *   \a — "a" letter
 * default is undefined
 *
 * [function] `reformat`: user function, if you want use custom reformat logic. It's userfull for numeric inputs.
 * If reformat defined mask'll be ignored. Reformat function must receive object with several fields:
 * function reformat({data: data, selection: {start, end}, input}) {
 *     // realisation
 *
 *     return {
 *         [any] value: value that store and calling in input core funcitons (such as reformat). value may have any format,
 *         [String] visibleValue: value that displayed to user in input if showMask is false,
 *         [String] maskedValue: value that  displayed to user in input if showMask is true,
 *         [{[integer] start, [integer] end}] selection: {start, end} — new selection range
 *     }
 * }
 *
 * if `reformat` and `mask` is undefined, input allow to enter any values.
 *
 * You can define custom mask by passing `maskFormat`. This prop must be an array,
 * each object in array have several fields:
 * str: matched char for mask
 * regexp: validation rule as regexp
 * type: special
 *
 * `maskChar`: Character to cover unfilled editable parts of mask. Default value is ''.
 * `maskString`: String to cover unfilled editable parts of mask. Default is undefined. If maskString define maskChar ignored.
 *
 * showMask: show mask in input. It's possible only if mask have not cyclic. Default value = false
 * alwaysShowMask: show mask when input inactive
 *
 * Callbacks:
 *   onValueChange(event). event is:
 *     maskedValue: masked value,
 *     value: value without nessesary mask
 *   getReference: callback to get input ref
 *   onChange(event) where event is a regular React.SyntheticEvent. Using this event you can get access to HTMLElement directly
 * All other props'll passed to input directly
 */
function MaskInput(props: IInputProps) {
  const input = React.useMemo<IMaskedInput>(
    () =>
      createInput({
        value: props.value || props.defaultValue || '',
        reformat: props.reformat,
        maskString: props.maskString,
        maskChar: props.maskChar || defaults.maskChar,
        mask: props.mask || undefined,
        maskFormat: props.maskFormat || defaults.maskFormat,
        showStartChars: props.showStartChars || defaults.showStartChars,
      }),
    []
  );
  const firstRender = React.useRef(true);
  const canSetSelection = React.useRef(false);
  const inputEl = React.useRef<HTMLInputElement>();
  const [showMask, setShowMask] = React.useState(props.alwaysShowMask || props.showMask);

  const getSelection = React.useCallback(() => {
    input.setSelection({
      start: inputEl.current.selectionStart,
      end: inputEl.current.selectionEnd,
    });
  }, [input]);

  const setSelection = React.useCallback(() => {
    if (!canSetSelection.current) {
      return;
    }
    const selection = input.getSelection();
    inputEl.current.setSelectionRange(selection.start, selection.end);

    const raf =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      // @ts-ignore
      window.mozRequestAnimationFrame ||
      ((fn) => setTimeout(fn, 0));
    raf(() => inputEl.current.setSelectionRange(selection.start, selection.end));
  }, [input]);

  const showValue = React.useCallback(() => {
    if (showMask && (canSetSelection.current || props.alwaysShowMask)) {
      inputEl.current.value = input.getState().maskedValue;
      return;
    }
    inputEl.current.value = input.getState().visibleValue;
  }, [showMask, props.alwaysShowMask, input]);

  React.useEffect(() => {
    if (!firstRender.current) {
      setShowMask(props.alwaysShowMask || props.showMask);
    }
  }, [props.alwaysShowMask, props.showMask]);

  React.useEffect(() => {
    if (!firstRender.current) {
      input.setReformat(props.reformat);
    }
  }, [props.reformat]);

  React.useEffect(() => {
    if (!firstRender.current) {
      input.setMaskFormat(props.maskFormat);
    }
  }, [props.maskFormat]);

  React.useEffect(() => {
    if (!firstRender.current) {
      input.setMask(props.mask);
    }
  }, [props.mask]);

  React.useEffect(() => {
    if (!firstRender.current) {
      input.setMask(props.mask);
    }
  }, [props.mask]);

  React.useEffect(() => {
    if (!firstRender.current) {
      input.setMaskString(props.maskString);
    }
  }, [props.maskString]);

  React.useEffect(() => {
    if (!firstRender.current) {
      input.setMaskChar(props.maskChar);
    }
  }, [props.maskChar]);

  React.useEffect(() => {
    if (!firstRender.current) {
      input.setValue(props.value);
    }
  }, [props.value]);

  React.useEffect(() => {
    firstRender.current = false;
    showValue();
  }, [firstRender.current, input]);

  React.useEffect(() => {
    props.getApplyValueCallback &&
      props.getApplyValueCallback((str: string) => {
        input.setValue(str);
        showValue();
      });
  }, [props.getApplyValueCallback, showValue]);

  React.useEffect(() => {
    const subscriber = () => {
      showValue();
      setSelection();
    };

    input.subscribe(subscriber);

    return () => {
      input.unsubscribe(subscriber);
    };
  }, [input, showValue, setSelection]);

  React.useEffect(() => {
    props.getReference && props.getReference(inputEl.current);
  }, [props.getReference]);

  const keyPressPropName = React.useCallback(() => {
    if (typeof navigator !== 'undefined' && navigator.userAgent.match(/Android/i)) {
      return 'onBeforeInput';
    }
    return 'onKeyPress';
  }, []);

  const dispatchEvent = (e: React.SyntheticEvent) => {
    props.onChange && props.onChange(e);
    const { maskedValue, visibleValue } = input.getState();
    onValueChange && onValueChange({ maskedValue, value: visibleValue });
  };

  const onPaste = (e) => {
    e.preventDefault();
    getSelection();

    // getData value needed for IE also works in FF & Chrome
    input.paste(e.clipboardData.getData('Text'));

    // Timeout needed for IE
    setTimeout(setSelection, 0);

    dispatchEvent(e);
  };

  const onChange = (e: React.ChangeEvent) => {
    let currentValue;
    if (showMask && (canSetSelection.current || props.alwaysShowMask)) {
      currentValue = input.getState().maskedValue;
    } else {
      currentValue = input.getState().visibleValue;
    }

    // fix conflict by update value in mask model
    if ((e.target as HTMLInputElement).value !== currentValue) {
      getSelection();
      input.setValue((e.target as HTMLInputElement).value);

      setTimeout(setSelection, 0);
    }
    dispatchEvent(e);
  };

  const onKeyPress = (e) => {
    if (e.metaKey || e.altKey || e.ctrlKey || e.key === 'Enter') {
      return;
    }

    e.preventDefault();
    getSelection();
    input.input(e.key || e.data || String.fromCharCode(e.which));
    setSelection();
    dispatchEvent(e);
  };

  const onKeyDown = (e) => {
    if (e.which === KEYBOARD.BACKSPACE) {
      e.preventDefault();
      getSelection();
      input.removePreviosOrSelected();

      setSelection();

      dispatchEvent(e);
    }

    if (e.which === KEYBOARD.DELETE) {
      e.preventDefault();
      getSelection();
      input.removeNextOrSelected();

      setSelection();

      dispatchEvent(e);
    }
  };

  const onFocus = (e) => {
    canSetSelection.current = true;
    props.onFocus && props.onFocus(e);
  };

  const onBlur = (e) => {
    canSetSelection.current = false;
    props.onBlur && props.onBlur(e);
  };

  const {
    onChange: ignoreOnChange,

    /* ignore unspecific props for input */
    onValueChange,
    mask,
    getReference,
    showMask: ignoreShowMask,
    maskChar,
    alwaysShowMask,
    maskFormat,
    maskString,
    reformat,
    getApplyValueCallback,

    /* ignore values */
    value,
    defaultValue,

    ...inputProps
  } = props;

  const keyPressEvent = { [keyPressPropName()]: onKeyPress };

  return (
    <input
      {...inputProps}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      onFocus={onFocus}
      onBlur={onBlur}
      {...keyPressEvent}
      ref={inputEl}
    />
  );
}

export default MaskInput;


export const defaults: {
  maskFormat: Array<IMaskItem>;
  maskChar: string;
  showMask: boolean;
  removeSelectedRange: Function;
  showStartChars: boolean;
} = {
  maskFormat: [
    {
      str: '0',
      regexp: /[0-9]/,
    },
    {
      str: '*',
      regexp: /./,
    },
    {
      str: 'a',
      regexp: /[a-zA-Z]/,
    },
  ],
  maskChar: '',
  showMask: false,
  removeSelectedRange,
  showStartChars: false,
};

export const createInput = (params: IInputParams): IMaskedInput => {
  let { maskString, reformat, maskFormat = defaults.maskFormat, maskChar = defaults.maskChar } = params;
  if (!reformat && !params.mask) {
    reformat = (params) => {
      const str = (params.value as IInputValue[]).map((item) => item.char).join('');
      return {
        value: params.value,
        visibleValue: str,
        maskedValue: str,
        selection: params.selection,
      };
    };
  } else if (reformat) {
    params.mask = null;
  }

  if (maskString && maskString.length !== params.mask.length) {
    throw new Error('maskString must have same length as mask');
  }

  if (maskChar.length > 1) {
    throw new Error('maskChar must have only 1 char');
  }

  let maskFormatMap: IMaskItemsMap;
  let selection: ISelectRange = { start: 0, end: 0 };
  let value: Array<IInputValue> | string;
  let maskedValue: string;
  let visibleValue: string;
  let mask: Array<IMaskItem>;
  let showStartChars = params.showStartChars;

  let callbacks = [];

  const interfaceMethods = {
    subscribe(callback) {
      callbacks.push(callback);
    },

    unsubscribe(callback) {
      callbacks = callbacks.filter((item) => item !== callback);
    },

    setShowStartChars(show: boolean) {
      showStartChars = show;
    },

    setMaskFormat(maskFormat: Array<IMaskItem>) {
      maskFormatMap = maskFormat.reduce((store, item) => {
        store[item.str] = item;
        return store;
      }, {}) as IMaskItemsMap;
    },

    setValue(data: string | Array<IInputValue>) {
      let result: IInputState;

      if (reformat) {
        result = reformat({
          value: data,
          selection,
        });
      } else {
        let dataList: Array<IInputValue>;
        if (Array.isArray(data)) {
          dataList = data;
        } else {
          dataList = [];
          for (let i = 0; i < data.length; i++) {
            dataList.push({ char: data[i], type: CharTypes.USER });
          }
        }
        result = inputValue({ data: dataList, selection, mask, maskChar, maskString, showStartChars });
      }

      applyChanges(result);
    },

    setSelection(newSelection: ISelectRange) {
      selection = newSelection;
    },

    getSelection() {
      return {
        start: selection.start,
        end: selection.end,
      };
    },

    backspace() {
      interfaceMethods.removePreviosOrSelected();
    },

    removePreviosOrSelected() {
      if (selection.start === selection.end) {
        selection.start = selection.end - 1;
        if (selection.start < 0) {
          selection.start = 0;
        }
      }

      interfaceMethods.input('');
    },

    removeNextOrSelected() {
      if (selection.start === selection.end) {
        selection.end++;
      }

      interfaceMethods.input('');
    },

    getState() {
      return {
        value,
        maskedValue,
        visibleValue,
        selection,
      };
    },

    setMask(newMask: string) {
      mask = defineMaskList(newMask, maskFormatMap);
      interfaceMethods.setValue(value);
    },

    setMaskChar(newMaskChar: string) {
      if (maskChar.length > 1) {
        throw new Error('maskChar must have only 1 char');
      }

      maskChar = newMaskChar;

      interfaceMethods.setValue(value);
    },

    setMaskString(newMaskString: string) {
      if (newMaskString && newMaskString.length !== mask.length) {
        throw new Error('maskString must have the same length as mask');
      }

      maskString = newMaskString;

      interfaceMethods.setValue(value);
    },

    setReformat(
      newReformat: (params: { value: Array<IInputValue>; input?: string; selection: ISelectRange }) => IInputState
    ) {
      reformat = newReformat;
      interfaceMethods.setValue(value);
    },

    paste(value: string) {
      interfaceMethods.input(value);
    },

    input(input: string) {
      let result: IInputState;

      if (reformat) {
        result = reformat({ value, input, selection });
      } else {
        const tmpValue = removeSelectedRange({ value: value as IInputValue[], selection, maskChar, maskString });
        selection.end = selection.start;
        result = inputValue({ data: tmpValue, input, selection, mask, maskChar, maskString, showStartChars });
      }

      applyChanges(result);
    },
  };

  function applyChanges(result: IInputState) {
    const oldMaskedValue = maskedValue;
    const oldVisibleValue = visibleValue;
    const oldSelection = selection;

    value = result.value;
    maskedValue = result.maskedValue;
    visibleValue = result.visibleValue;
    interfaceMethods.setSelection(result.selection);

    if (
      oldMaskedValue !== maskedValue ||
      oldVisibleValue !== visibleValue ||
      oldSelection.start !== selection.start ||
      oldSelection.end !== selection.end
    ) {
      notify();
    }
  }

  function notify() {
    const state = interfaceMethods.getState();
    callbacks.forEach((callback) => {
      callback(state);
    });
  }

  interfaceMethods.setMaskFormat(maskFormat);
  mask = defineMaskList(params.mask, maskFormatMap);
  interfaceMethods.setValue(params.value);

  return interfaceMethods;
};

export enum CharTypes {
  USER = 1,
  CHAR = 2,
  MASK = 3,
}


export function buildInputStrings(
  data: Array<IInputValue>,
  mask: Array<IMaskItem>,
  input: string,
  maskChar: string,
  maskString: string,
  selection: ISelectRange
): { value: Array<IInputValue>; maskedValue: string; inputValuesApplied: number } {
  let value: Array<IInputValue> = [];
  let valueIndex = 0;
  let pastedIndex = 0;
  let maskedValue = '';
  let inputValuesApplied = 0;

  function processMaskPartAsChar(maskPart: IMaskItem, pastedValuesStack: string, item: IInputValue) {
    // if user inputs value, we check it, but we don't go through whole stack
    if (pastedValuesStack && pastedValuesStack[0] === maskPart.char) {
      pastedIndex++;
    } else {
      if ((item && (item.char === maskPart.char || item.type !== CharTypes.USER)) || input) {
        valueIndex++;
      }
    }

    value.push({
      char: maskPart.char,
      type: CharTypes.CHAR,
    });

    if (pastedValuesStack) {
      inputValuesApplied++;
    }

    maskedValue += maskPart.char;
  }

  function processMaskPartAsRegExp(
    maskPart: IMaskItem,
    maskIndex: number,
    pastedValuesStack: string,
    item: IInputValue
  ) {
    let part = null;

    // If we have the value inputted by user, check it.
    // We have to move through the whole stack, to find suitable
    if (pastedValuesStack) {
      let i = 0;
      while (!maskPart.regexp.test(pastedValuesStack[i]) && pastedValuesStack.length > i) {
        i++;
        pastedIndex++;
      }
      if (pastedValuesStack.length > i) {
        pastedIndex++;
        inputValuesApplied++;

        // Ignore previous value from the input
        valueIndex++;

        part = pastedValuesStack[i];
        value.push({
          char: part,
          type: CharTypes.USER,
        });
        maskedValue += part;
      }
    }

    if (part) {
      return;
    }
    // User input doesn't have data or it's invalid.
    // Try to apply the previous data, or change them to the placeholder

    // if shift happened, pass excess values
    if (item && item.type === CharTypes.CHAR && data.length > valueIndex + 1) {
      valueIndex++;
      processMaskItem(maskPart, maskIndex);
      return;
    }

    if (item && item.type === CharTypes.USER && maskPart.regexp.test(item.char)) {
      value.push({
        char: item.char,
        type: CharTypes.USER,
      });
      maskedValue += item.char;
      valueIndex++;

      return;
    }

    part = maskString ? maskString[maskIndex] : maskChar;

    value.push({
      char: part,
      type: CharTypes.MASK,
    });

    if (data.length > maskIndex) {
      valueIndex++;
    }

    maskedValue += part;
  }

  // we use closures here to mutate variables, so that it increases the performance.
  function processMaskItem(maskPart: IMaskItem, maskIndex: number) {
    let item: IInputValue = data.length > valueIndex ? data[valueIndex] : null;
    let pastedValuesStack: string = null;

    if (selection.start <= maskIndex && pastedIndex < input.length) {
      pastedValuesStack = input.slice(pastedIndex);
    }

    // process hardcoded char to the mask
    if (maskPart.char) {
      return processMaskPartAsChar(maskPart, pastedValuesStack, item);
    }

    // text by regexp
    if (maskPart.regexp) {
      return processMaskPartAsRegExp(maskPart, maskIndex, pastedValuesStack, item);
    }
  }

  mask.forEach((maskPart, maskIndex) => {
    processMaskItem(maskPart, maskIndex);
  });

  return {
    value,
    maskedValue,
    inputValuesApplied,
  };
}

export function defineMaskList(mask: String, format: IMaskItemsMap): Array<IMaskItem> {
 if (!mask) {
   return [];
 }

 const stack: Array<IMaskItem> = [];

 // flag if escape char is used
 let escape = false;

 mask.split('').forEach((maskChar) => {
   let item = format[maskChar];

   // if the previous char was escape char, we should ignore next format rule, and process mask char as a regular char.
   if (escape && item) {
     item = null;
     escape = false;
   }

   if (!item) {
     // escape char
     if (!escape && maskChar === '\\') {
       escape = true;
       return;
     }

     escape = false;
     stack.push({
       char: maskChar,
     });
     return;
   }

   if (item.regexp) {
     stack.push(item);
   }
 });

 return stack;
}


export function inputValue(params: {
  data: Array<IInputValue>;
  input?: string;
  selection: ISelectRange;
  mask: Array<IMaskItem>;
  maskChar?: string;
  maskString?: string;
  showStartChars?: boolean;
}): IInputState {
  const { data, input = '', selection, mask, maskChar, maskString, showStartChars } = params;

  const { value, maskedValue, inputValuesApplied } = buildInputStrings(
    data,
    mask,
    input,
    maskChar,
    maskString,
    selection
  );

  const selectionPosition = selection.start + inputValuesApplied;

  // remove all leading maskChar
  let bound = value.length - 1;
  let charsCount = 0;
  while (bound >= 0 && value[bound].type !== CharTypes.USER) {
    if (value[bound].type === CharTypes.MASK) {
      charsCount = 0;
    }
    if (value[bound].type === CharTypes.CHAR) {
      charsCount++;
    }
    bound--;
  }
  if (showStartChars || bound >= 0 || (input && input.trim())) {
    bound += charsCount;
  }

  let visibleValue = '';
  for (let i = 0; i <= bound; i++) {
    visibleValue += value[i].char;
  }

  return {
    value,
    visibleValue,
    maskedValue,
    selection: {
      start: selectionPosition,
      end: selectionPosition,
    },
  };
}

const copyMaskChar = (count: number, maskChar: string): Array<IInputValue> => {
  const res: Array<IInputValue> = [];
  for (let i = 0; i < count; i++) {
    res.push({
      char: maskChar,
      type: CharTypes.MASK,
    });
  }
  return res;
};

const pasteMaskSymbols = (maskString: string, maskChar: string, selection: ISelectRange): Array<IInputValue> => {
  if (maskString) {
    const res = [];
    for (let i = selection.start; i < selection.end; i++) {
      res.push({
        char: maskString[i],
        type: CharTypes.MASK,
      });
    }
    return res;
  }

  return copyMaskChar(selection.end - selection.start, maskChar);
};

export function removeSelectedRange(param: {
  value: Array<IInputValue>;
  selection: ISelectRange;
  maskChar: string;
  maskString: string;
}): Array<IInputValue> {
  const { value, selection, maskChar, maskString } = param;

  if (selection.end < selection.start) {
    const tmp = selection.end;
    selection.end = selection.start;
    selection.start = tmp;
  }

  if (selection.start === selection.end) {
    return value;
  }

  if (value.length > selection.start) {
    return value
      .slice(0, selection.start)
      .concat(pasteMaskSymbols(maskString, maskChar, selection), value.slice(selection.end, value.length));
  }

  return value;
}

export interface IInputParams {
  value: string;
  mask?: string;
  maskChar?: string;
  maskFormat?: Array<IMaskItem>;
  maskString?: string;
  reformat?: (params: { value: Array<IInputValue> | string; input?: string; selection: ISelectRange }) => IInputState;
  showStartChars?: boolean;
}

export interface IInputValue {
  char: string;
  type: CharTypes;
}

export interface IInputState {
  value: Array<IInputValue> | string;
  visibleValue: string;
  maskedValue: string;
  selection: {
    start: number;
    end: number;
  };
}

export interface IMaskedInput {
  setMaskFormat: (maskFormat: Array<IMaskItem>) => void;
  setValue: (data: string | Array<IInputValue>) => void;
  setSelection: (newSelection: ISelectRange) => void;
  getSelection: () => ISelectRange;
  backspace: () => void;
  removePreviosOrSelected: () => void;
  removeNextOrSelected: () => void;
  getState: () => IInputState;
  setMask: (newMask: string) => void;
  setMaskChar: (newMaskChar: string) => void;
  setMaskString: (newMaskString: string) => void;
  subscribe: (callback: (state: IInputState) => any) => void;
  unsubscribe: (callback: (state: IInputState) => any) => void;
  setReformat: (
    newReformat: (params: {
      value: Array<IInputValue> | string;
      input?: string;
      selection: ISelectRange;
    }) => IInputState
  ) => void;
  paste: (value: string) => void;
  input: (input: string) => void;
}
export interface IMaskItem {
  // regexp placeholder
  str?: string;
  regexp?: RegExp;

  // exact char
  char?: string;
}

export interface IMaskItemsMap {
  [key: string]: IMaskItem;
}
export interface ISelectRange {
  start: number;
  end: number;
}
