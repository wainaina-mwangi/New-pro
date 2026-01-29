function LanguageList() {
  const languages = ["JavaScript", "Python", "React", "Tailwind"];

  return (
    <div className="bg-black text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Languages to Learn:</h2>
      
      <ul className="list-disc ml-5">
        {languages.map((lang, index) => (
          // We return a JSX element for every item in the array
          <li key={index} className="text-blue-400 hover:text-blue-300">
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default LanguageList