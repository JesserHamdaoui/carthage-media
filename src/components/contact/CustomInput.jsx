import { Field, useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="inline">
      <label className="text-white block pl-1">{label}</label>
      <Field
        {...field}
        {...props}
        className={`border ${
          meta.error && meta.touched ? "border-red-400" : "border-slate-50"
        } bg-stone-900 text-white rounded-xl py-1 px-3 min-w-full`}
      />
      {meta.touched && meta.error && (
        <span className="pl-2 text-sm text-red-400 font-thin block">
          {meta.error}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
