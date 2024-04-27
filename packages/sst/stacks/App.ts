import { SvelteKitSite, StackContext } from "sst/constructs";

export default function App({ stack }: StackContext) {
  const site = new SvelteKitSite(stack, "App", {
    path: "../app",
    customDomain: {
      hostedZone: "kribl.io",
      domainName: "tttp.kribl.io"
    }
  });

  stack.addOutputs({
    URL: site.customDomainUrl ?? site.url,
  });
}