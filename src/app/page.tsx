type Props = {};

const Home = (props: Props) => {
  const handleSubmit = () => {};

  return (
    <div className="h-full flex justify-center items-center">
      <form className="w-3/5 h-full flex flex-col justify-center">
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1">
            아이디
          </label>
          <input
            id="username"
            className="border-slate-300 rounded-md border-solid border-2 mb-6 p-3 outline-none focus:border-slate-400 transition-all duration-300"
            placeholder="비밀번호를 입력하세요"
          ></input>
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="mb-1">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            className="border-slate-300 rounded-md border-solid border-2 p-3 outline-none focus:border-slate-400 transition-all duration-300"
            placeholder="비밀번호를 입력하세요"
          ></input>
        </div>
        <button className="shadow bg-red-300 py-2 rounded-lg hover:bg-red-400 transition-colors duration-300">
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Home;
