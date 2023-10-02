import AuthForm from "@/app/(site)/components/AuthForm";

export default function Home() {
  return (
    <div
      className="
				flex
				min-h-full
				flex-col
				justify-center
				py-12
				sm:px-6
				lg:px-8
				bg-dark1
			"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <h3
          className="
						text-center
						text-2xl
						font-bold
						tracking-tight
						text-gold
						bg-dark3
						py-3
						px-8
						rounded-xl
					"
        >
          Interactive Chat
        </h3>
        <h1
          className="
						mt-6
						text-center
						text-4xl
						font-bold
					"
        >
          Sign in to your account
        </h1>
      </div>
      <AuthForm />
    </div>
  );
}
