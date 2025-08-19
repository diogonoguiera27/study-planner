import { HeroBanner, LoginForm } from "@/components/LoginForms";
export function Login() {
  return (
    <main className="!min-h-screen !grid !grid-cols-1 lg:!grid-cols-2">
      <HeroBanner/>
      <section className="!bg-gray-50 !flex !items-center !justify-center !p-6">
        <LoginForm/>
      </section>
    </main>
  );
}
