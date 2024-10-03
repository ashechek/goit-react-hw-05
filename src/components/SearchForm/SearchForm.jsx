import { Field, Form, Formik } from "formik";
import s from "./SearchForm.module.css";

const SearchForm = ({ setSearchingWord }) => {
  const initialValues = {
    query: "",
  };
  const onSubFu = (values, options) => {
    if (values.query.trim() === "") {
      return;
    } else {
      const query = values.query.trim();
      setSearchingWord(query);

      options.resetForm();
    }
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubFu}>
        <Form className={s.form}>
          <Field name="query" className={s.field} />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchForm;
