const Input = ({ label, type, state, setState }) => {
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {label}
      </label>
      <input
        name={type}
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 dark:text-black text-gray-900 placeholder-gray-500 dark:placeholder-black focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={label}
      />
    </div>
  );
};

export default Input;
