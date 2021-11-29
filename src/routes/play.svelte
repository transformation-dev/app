<script>
    import { mdiLanguageJavascript } from '@mdi/js';
    import Icon from '$lib/Icon.svelte';
</script>

<h1 class="title">Big header</h1>
<h2 class="subtitle">Something to say</h2>

<span class="icon-text is-large has-text-success">
    <svg style="1.5rem; height:1.5rem " viewBox="0 0 24 24">
        <path fill="#000000" d={mdiLanguageJavascript} />
    </svg>
</span>
<span>Hello</span>

<h1 class="title">Big header</h1>
<h2 class="subtitle">Something to say</h2>

<span class="icon-text ">
    <Icon size="is-small" path={mdiLanguageJavascript} />
    <span class="is-size-7 has-text-success ">Hello</span>
</span>
