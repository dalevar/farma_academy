
// eslint-disable-next-line react/prop-types
const ButtonForum = ({children, onClick}) => {
  return (
    <button className='bg-farma-950 text-white w-3/12 block rounded-lg py-5 text-xl font-semibold' onClick={onClick}>
        {children}
    </button>
  )
}

export default ButtonForum