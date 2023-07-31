import { Outlet } from "@tanstack/router";

export default function Root() {
  return (
    <section className="container mx-auto p-4">
      <Outlet />
    </section>
  );
}
