import './LayoutCentered.scss'

const LayoutCentered: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return <div className="layout-centered__container">{children}</div>
}

export default LayoutCentered