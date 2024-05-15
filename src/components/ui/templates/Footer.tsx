const Footer = () => {
  const todayDate = new Date()

  return <footer className="py-3 text-xs font-light flex-none w-full text-center">TODO List &copy; {todayDate.getFullYear()} nobitwise</footer>
}

export default Footer
