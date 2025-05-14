import { createSignal } from "solid-js";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [loading, setLoading] = createSignal(false);
  const [success, setSuccess] = createSignal(false);
  const [error, setError] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // リセット
    setLoading(true);
    setSuccess(false);
    setError(false);

    // フォームデータを取得
    const form = e.target;

    // EmailJSに送信
    // 注意: YOUR_SERVICE_ID、YOUR_TEMPLATE_ID、YOUR_PUBLIC_KEY は
    // EmailJSのダッシュボードで取得した値に置き換えてください
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then((result) => {
        console.log("メール送信成功:", result.text);
        setSuccess(true);
        form.reset(); // フォームをリセット
      })
      .catch((error) => {
        console.error("メール送信エラー:", error.text);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="body-container relative flex items-center justify-center min-h-screen">
      <div
        className="bg-[url(./assets/NewMK_bold_transparent.png)] bg-cover bg-center fixed w-128 h-128 opacity-30"
        id="background"
      >
        <span className="invisible">
          This is a div aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </div>
      <div className="grid-overlay"></div>
      <div className="content-body-content justify-center">
        <h1 className="text-4xl text-center text-white md:pt-10">Contact</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name" // EmailJSで使用する名前
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 pl-4 pr-4 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-white dark:focus:border-white"
              placeholder="名無しの権兵衛"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email" // EmailJSで使用する名前
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 pr-4 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="namelessgombeh@email.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message" // EmailJSで使用する名前
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 pr-4 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Message"
              required
              rows="6"
            ></textarea>
          </div>

          {/* 送信ステータスメッセージ */}
          {success() && (
            <div class="mb-4 text-green-600 text-center">
              メッセージが送信されました！
            </div>
          )}
          {error() && (
            <div class="mb-4 text-red-600 text-center">
              送信に失敗しました。後でもう一度お試しください。
            </div>
          )}

          <div class="flex justify-center">
            <button
              type="submit"
              disabled={loading()}
              class="w-1/5 bg-gray-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            >
              {loading() ? "送信中..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
