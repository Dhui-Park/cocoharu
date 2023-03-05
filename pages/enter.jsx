import { useState } from "react";

function cls(...classnames) {
  return classnames.join(" ");
}

export default function Enter() {
  const [method, setMethod] = useState("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className="mt-10">
      <h3 className="text-center text-3xl font-bold">Enter to CocoHaru</h3>
      <div className="mt-16">
        <div className="flex flex-col items-center">
          <h5 className="text-sm font-medium text-gray-500">Enter using:</h5>
          <div className="mt-8 grid w-full grid-cols-2 gap-16 pb-4">
            <button
              className={cls(
                "border-b-2 pb-4 font-medium",
                method === "email"
                  ? " border-orange-600 text-orange-600"
                  : "border-transparent text-gray-500"
              )}
              onClick={onEmailClick}
            >
              Email address
            </button>
            <button
              className={cls(
                "border-b-2 pb-4 font-medium",
                method === "phone"
                  ? " border-orange-600 text-orange-600"
                  : "border-transparent text-gray-500"
              )}
              onClick={onPhoneClick}
            >
              Phone number
            </button>
          </div>
        </div>
        <form>
          <label>
            {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone number" : null}
          </label>
          <div>
            {method === "email" ? <input type="email" required /> : null}
            {method === "phone" ? (
              <div>
                <span>+82</span>
                <input type="number" required />
              </div>
            ) : null}
          </div>
          <button>
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form>
      </div>
    </div>
  );
}
