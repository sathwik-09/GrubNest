
const Contact = () => {
  return(
    <div>
      <h1 className="font-bold p-2 m-2 text-4xl text-center">Cotact us</h1>
      <form>
        <input type="text" placeholder="Enter your name" className="border border-black p-2 m-2 text-center"></input>
        <input type="text" placeholder="Message" className="border border-black p-2 m-2"></input>
        <button className="p-2 m-2 border border-black bg-gray-200 rounded-lg">Submit</button>
      </form>
    </div>
  )
}

export default Contact;