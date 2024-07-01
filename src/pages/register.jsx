import cataloge from '../assets/cataloge.jpg';


const Register = () => {
  return (
    <>
      <div className="sign-box flex justify-center items-center w-full h-[100vh] bg-indigo-500" style={{backgroundImage: `url(${cataloge})`}}>
        <form className="flex flex-col py-10 items-center w-[400px] h-[500px] bg-indigo-500/95 rounded-md">
          <h1 className='text-4xl font-bold text-white my-6'>Register</h1>
          <input type="text" placeholder='username' className='h-[40px] w-[330px] rounded-sm p-2 m-2'/>
          <input type="email" placeholder='example@email.com' className='h-[40px] w-[330px] rounded-sm p-2 m-2'/>
          <input type="password" placeholder='password' className='h-[40px] w-[330px] rounded-sm p-2 m-2'/>
          <input type="password" placeholder='confirm password' className='h-[40px] w-[330px] rounded-sm p-2 m-2'/>
          <button className='h-[46px] w-[330px] rounded-sm p-2 bg-indigo-950 text-white font-bold my-6' >REGISTER</button>
        </form>
      </div>
    </>
  );
};

export default Register;
