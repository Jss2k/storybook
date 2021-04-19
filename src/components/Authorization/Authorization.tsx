import { useState } from 'react'
import Modal from './../Modal/Modal';
import Button from './../Button/Button';
import styles from './Authorization.module.scss';
import { ReactComponent as IconLeft } from './../assets/icons/left_arrow.svg';
import Input from './../Input/Input';

type Steps = {
  title: string,
  headerBtn?: JSX.Element,
  footerBtn?: JSX.Element,
  component?: JSX.Element
}

function Authorization(props: {

}) {
  const [visible, setVisible] = useState(true)
  const [proceedNext, setProceedNext] = useState(true)
  const [telNumber, setTelNumber] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const goNext = () => {
      if (selectedIndex !== steps.length - 1)
          setSelectedIndex(selectedIndex + 1)
  }

  const goPrevious = () => {
      if (selectedIndex !== 0)
          setSelectedIndex(selectedIndex - 1)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelNumber(e.target.value,)
  }

  const steps: Steps[] = [
    {
      title: 'Вход',
      headerBtn: <HeaderButton
        title={'Регистрация'}
        onClick={() => console.log('click clack')} />,
      component: <EntryStep 
        goNext={goNext}
        onChange={(e) => handleChange(e)}
        value={telNumber}
      />
    },
    {
      title: 'Восстановление',
      footerBtn: <Button onClick={() => console.log('отправил SMS')}>Отправить SMS-код</Button>,
      component: <RecoveryStepOne 
        goNext={goNext}
        onChange={(e) => handleChange(e)}
        value={telNumber}
      />
    },
    {
      title: 'Восстановление',
    },
  ]


  return (
    <>
    <Modal
      visible={visible}
      closeModal={() => setVisible(false)}
      outsideClickClose={true}
      title={steps[selectedIndex].title}
      headerButton={steps[selectedIndex].headerBtn
        ? steps[selectedIndex].headerBtn
        : <HeaderButton onClick={() => goPrevious()}/>
      }
      footer={steps[selectedIndex].footerBtn
        ? steps[selectedIndex].footerBtn
        : <Button onClick={() => goNext()}>Войти</Button>
      }
      footerStyle={{justifyContent: 'flex-end'}}
    >
      <MultistepForm steps={steps} selectedIndex={selectedIndex}/> 
    </Modal>
    </>
  )
}
  
function HeaderButton(props: { title?: string; onClick: () => void }) {
  
  if (props.title) {
    return (
      <button className={styles.headerBtn} onClick={props.onClick}>
        <span>{props.title}</span>
      </button>
    );
  }

  return (
    <button className={styles.backBtn} onClick={props.onClick}>
      <IconLeft className={styles.back__icon} />
      <span>Назад</span>
    </button>
  );
}

function MultistepForm(props: {
  steps: Steps[],
  selectedIndex: number,
}) {
  return (
    <div className={styles.MultistepForm}>
      {props.steps[props.selectedIndex].component}
    </div>
  )
}

function EntryStep(props: {
  goNext?: () => void,
  goPrevious?: () => void,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}) {
  const [telNumber, setTelNumber] = useState(props.value)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleFormSubmit = (event: React.FormEvent)=> {
    event.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
}
  return (
    <form onSubmit={handleFormSubmit}>
      <Input 
        type='tel'
        name='tel'
        title='Номер вашего телефона'
        // value={telNumber}
        // handleChange={handleChange}
        // mask="cpf"
        placeholder="999.999.999-99"
      />

      <Input 
        type='text'
        name='sms'
        title='SMS-код'
        textButton='Восстановить доступ'
        // activeButton={true}
        onClick={props.goNext}
      />
    </form>
  )
}

function RecoveryStepOne(props: {
  goNext?: () => void,
  goPrevious?: () => void,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}) {
  const [telNumber, setTelNumber] = useState(props.value)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleFormSubmit = (event: React.FormEvent)=> {
    event.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
}
  return (
    <form onSubmit={handleFormSubmit}>
      <Input 
        type='text'
        name='tel'
        title='Номер вашего телефона'
        value={props.value}
        handleChange={telNumber => handleChange(telNumber)}
      />

    </form>
  )
}

export default Authorization