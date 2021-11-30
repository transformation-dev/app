<script context="module">
    import {mdiLanguageJavascript} from '@mdi/js';
    import Icon from '$lib/Icon.svelte';
</script>

<h1 class="title">Big header</h1>
<h2 class="subtitle">Something to say</h2>

<span class="icon-text is-large has-text-success">
    <svg style="1rem; height:1rem " viewBox="0 0 24 24">
        <path fill="#000000" d={mdiLanguageJavascript} />
    </svg>
</span>
<span>Hello</span>

<h1 class="title">Big header</h1>
<h2 class="subtitle">Something to say</h2>

<span class="icon-text has-text-success">
    <Icon size="is-large" path={mdiLanguageJavascript} />
    <span class="is-size-7">Hello</span>
</span>

