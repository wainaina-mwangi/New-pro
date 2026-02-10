import React, { useState, useRef } from "react";

function Forms() {
  const [ingredients, setIngredients] = useState([]);
  const formRef = useRef(null); // Reference to reset the form

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredientName");
    
    if (newIngredient && newIngredient.trim() !== "") {
      setIngredients((prev) => [...prev, newIngredient]);
      formRef.current?.reset(); // Clears the input field after adding
    }
  }
 // This is the new method in react 19 on how to deal with forms
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recipe Ingredients
        </h2>

        {/* Form with Tailwind Flexbox */}
        <form 
          ref={formRef} 
          action={addIngredient} 
          className="flex gap-2 mb-8"
        >
          <input
            type="text"
            name="ingredientName"
            placeholder="e.g. 2 cups of flour"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors active:scale-95"
          >
            Add
          </button>
        </form>

        {/* Ingredients List */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Current List
          </h3>
          {ingredients.length === 0 ? (
            <p className="text-gray-400 italic">No ingredients added yet.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {ingredients.map((item, index) => (
                <li 
                  key={index} 
                  className="py-3 text-gray-700 flex items-center gap-2"
                >
                  <span className="h-2 w-2 bg-blue-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}

export default Forms;