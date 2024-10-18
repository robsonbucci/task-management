import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import LoginCard from "@/app/components/LoginCard/LoginCard";
import Link from "next/link";

export default function Cadastro() {
  return <LoginCard title="Crie sua Conta" >
     <form className="flex flex-col gap-4">
        <Input type="text" placeholder="Seu nome" />
        <Input type="email" placeholder="Seu e-mail" />
        <Input type="password" placeholder="Sua senha" />
        <Button>Cadastrar</Button>
        <Link href="/login">Ja possui conta?</Link>
      </form>
  </LoginCard>
}
