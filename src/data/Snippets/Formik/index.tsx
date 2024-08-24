import { Category } from "../../../constants/Category";
import { Tags } from "../../../constants/tags";
import { ISnippet } from "../../../types/SnippetModels";

export const Formik: ISnippet[] = [
  {
    title: "formik hook",
    tags: [Tags.React, Tags.Formik],
    category: Category.Formik,
    link: "https://formik.org/docs/overview",
    description: "you can use Yup for validation",
    code: `const formik = useFormik({
      initialValues,
      onSubmit: (values) => {},
      validationSchema
    })`,
  },
  {
    title: "formik input component",
    tags: [Tags.React, Tags.Formik],
    category: Category.Formik,
    description:
      "this is custom input component when we use formik hook for handling forms. You can use any styling lib other than Tailwind css",
    link: "https://formik.org/docs/overview",
    type: `interface Props {
      onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
      onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
      errors: { [key: string]: string };
      name: string;
      placeholder?: string;
      value: string;
      touched: { [key: string]: boolean };
      disabled?: boolean;
      styles?: string;
      label?: string;
      textarea?: boolean;
    }`,
    code: `const InputForm = ({
      onBlur,
      onChange,
      errors,
      name,
      placeholder = "",
      value,
      touched,
      label,
      disabled = false,
      styles = "",
      textarea = false,
    }: Props) => {
      return (
        <div className={styles}>
          {label && <label className="text-gray-400 font-semibold">{label}</label>}
          <input
            disabled={disabled}
            type="text"
            name={name}
            placeholder={placeholder}
            className={\`border-1.5 text-smrounded-md border-gray-300 block w-full rounded-md py-2 ps-2 font-semibold focus:border-2 focus:outline-none \${
              disabled ? "text-gray-300" : "text-text-secondary"
            }\`}
            id={name}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
          {errors[name] && touched[name] && (
            <div className="text-red-500 text-sm">{errors[name]}</div>
          )}
        </div>
      );
    };
    
    export default memo(InputForm);`,
  },
];
