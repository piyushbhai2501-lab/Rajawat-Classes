<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep business details and course definitions in a shared browser-safe module so all pages and contact actions remain consistent.
- Use TanStack leaf routes for each public page; keep course detail routes as flat filenames to avoid parent layouts masking children.
- Keep reusable website sections in site components and visual tokens in the global stylesheet for coherent styling and lightweight CSS motion.
- Validate the contact form with the shared Zod schema and prepare an explicit WhatsApp handoff; never imply server submission or store personal enquiry data without a configured service.
- Keep educational editorial imagery in a shared browser-safe media catalogue; distinguish illustrative images from institute photographs and sample previews from downloadable institute resources.
