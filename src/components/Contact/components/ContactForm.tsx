type ContactFormProps = {
  error: boolean;
  loading: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  success: boolean;
};

const ContactForm = ({
  error,
  loading,
  onSubmit,
  success,
}: ContactFormProps) => {
  return (
    <div className="content-body-content justify-center">
      <h1 className="text-4xl text-center text-white md:pt-10">Contact</h1>
      <br />
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 pl-4 pr-4 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-white dark:focus:border-white"
            placeholder="名無しの権兵衛"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 pr-4 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="namelessgombeh@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 pr-4 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message"
            required
            rows="6"
          ></textarea>
        </div>

        {success && (
          <div className="mb-4 text-green-600 text-center">
            メッセージが送信されました！
          </div>
        )}
        {error && (
          <div className="mb-4 text-red-600 text-center">
            送信に失敗しました。後でもう一度お試しください。
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="w-1/5 bg-white hover:bg-black hover:border hover:border-gray-300 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
          >
            {loading ? "送信中..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
