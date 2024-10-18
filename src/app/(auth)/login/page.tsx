import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import LoginCard from "@/app/components/LoginCard/LoginCard";
import Link from "next/link";

export default function Login() {
  return (
    <LoginCard title="Entre em sua Conta">
      <form className="flex flex-col gap-4">
        <Input type="email" placeholder="Seu e-mail" />
        <Input type="password" placeholder="Sua senha" />
        <Button>Entrar</Button>
        <Link href="/cadastro">Ainda não possui conta?</Link>
      </form>
    </LoginCard>
  );
}
