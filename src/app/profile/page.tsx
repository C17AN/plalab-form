"use client";

const Profile = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // 새 FormData 인스턴스 생성
    const formData = new FormData();
    // 입력 필드의 값 추가
    formData.append("username", event.target.username.value);
    formData.append("password", event.target.password.value);
    // 파일 필드의 파일 추가 (input 타입이 file이며, name이 'profileImage'인 경우)
    if (event.target.profileImage.files[0]) {
      formData.append("profileImage", event.target.profileImage.files[0]);
    }

    // FormData 객체를 사용하여 fetch API로 서버에 데이터 전송
    const response = await fetch("http://localhost:5500/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-3/5 h-full flex flex-col justify-center"
        encType="multipart/form-data"
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1">
            아이디
          </label>
          <input
            name="username"
            id="username"
            className="border-slate-300 rounded-md border-solid border-2 mb-6 p-3 outline-none focus:border-slate-400 transition-all duration-300"
            placeholder="아이디를 입력하세요"
          ></input>
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="mb-1">
            비밀번호
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="border-slate-300 rounded-md border-solid border-2 p-3 outline-none focus:border-slate-400 transition-all duration-300"
            placeholder="비밀번호를 입력하세요"
          ></input>
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="profileImage" className="mb-1">
            프로필 이미지
          </label>
          <input
            type="file"
            name="profileImage"
            id="profileImage"
            className="mb-6"
          ></input>
        </div>
        <button
          type="submit"
          className="shadow bg-red-300 py-2 rounded-lg hover:bg-red-400 transition-colors duration-300"
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Profile;
