import { useForm } from "react-hook-form";
import "./AuthForm.css";
import { useState } from "react";
import login from "../../utils/utils";

function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = (data) =>
    login(data).then((res) => {
      if (res.error) setError(true);
      else if (res.login) setAuth(true);
    });

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {!auth ? (
        <div className="wrapper">
          <p className="welcome">Welcome</p>
          <abbr
            className="tooltip"
            title="try this to check out - mail: admin@mail.com; password: admin;"
          >
            stuck? hover.
          </abbr>
          <input
            placeholder="Email"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            value={"admin@mail.com"}
            type="email"
            required
          />

          <input
            placeholder="Password"
            type="password"
            required
            aria-invalid={errors.password ? "true" : "false"}
            value={"admin"}
            {...register("password")}
          />
          <input type="submit" value="Log in" />
        </div>
      ) : (
        <div className="wrapper">
          {" "}
          You are loged in! <br />{" "}
          <span className="faded">refresh page to try again</span>
        </div>
      )}
    </form>
  );
}

export default AuthForm;
