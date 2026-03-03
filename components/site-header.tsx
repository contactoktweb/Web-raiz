import { Navbar } from "./navbar"
import { client } from "@/sanity/lib/client"
import { globalSettingsQuery } from "@/sanity/lib/queries"

export async function SiteHeader({ transparentLight = false }: { transparentLight?: boolean }) {
    const settings = await client.fetch(globalSettingsQuery);
    const logoUrl = settings?.logoUrl || "/logo-oficial.png";
    const logoAlt = settings?.logoAlt || "Raíz Vital Logo";

    return <Navbar transparentLight={transparentLight} logoUrl={logoUrl} logoAlt={logoAlt} />;
}
