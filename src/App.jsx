


function App() {
  const user ={
    name:'Heady Lemar',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <>
  
      <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={'Photo of ' + user.name} />
    </>
  )
}

export default App
