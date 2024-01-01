import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const states = ["Gujarat", "Maharashtra", "Karnataka"];
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    hearAbout: ["LinkedIn"],
    city: "Mumbai",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckboxChange = (e) => {
    let newArray = [...formData.hearAbout, e.target.value];
    if (formData.hearAbout.includes(e.target.value)) {
      newArray = newArray.filter((day) => day !== e.target.value);
    }
    setFormData({ ...formData, hearAbout: newArray });
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData({ ...formData, state: suggestion });
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <p className="text-gray-500 text-base">
        Have an Account?{" "}
        <Link to="/signIn" className="underline">
          Sign in
        </Link>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="male"
                name="gender"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="female"
                name="gender"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="others"
                name="gender"
                checked={formData.gender === "others"}
                onChange={handleChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Others</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            How did you hear about this?
          </label>
          <div>
            {/* Add required attribute to at least one checkbox */}
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="LinkedIn"
                checked={formData.hearAbout.includes("LinkedIn")}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">LinkedIn</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                value="Friends"
                checked={formData.hearAbout.includes("Friends")}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Friends</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                value="Job Portal"
                checked={formData.hearAbout.includes("Job Portal")}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Job Portal</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                value="Others"
                checked={formData.hearAbout.includes("Others")}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Others</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-600"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            onClick={() => setSuggestions(states)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          {suggestions.length > 0 && (
            <ul className="mt-2 border border-gray-300 rounded-md">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SignUp;
