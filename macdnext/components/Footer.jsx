import favicon from '../assets/favicon.svg'
const Footer = () => {
  return (
    <footer className="flex h-24 w-full flex-col items-center justify-center border-t">
      <h2>
        {' '}
        <img src={favicon.svg} alt="" /> 2020-21 McDonald's. All Rights
        Reserved.
      </h2>
      <p>
        Connaught Plaza Restaurants Private Limited (licensee of McDonald's in
        North & East India)
      </p>
      <p>
        FAQ |TERMS & CONDITIONS | PRIVACY POLICY | FEEDBACK | CAREERS | CONTACT
        US
      </p>
    </footer>
  )
}

export default Footer
