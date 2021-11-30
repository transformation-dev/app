<script>
    export let path
    export let size = ''

    export let isClickable = false
    
    let styleString = 'fill:currentColor;'
    $: {
        switch (size) {
            case 'is-small':
                styleString += ' width:1rem; height:1rem'
                break
            case 'is-medium':
                styleString += ' width:2rem; height:2rem'
                break
            case 'is-large':
                styleString += ' width:3rem; height:3rem'
                break
            default:
                styleString += ' width:1.5rem; height:1.5rem'
                break
        }
    }
</script>

<span class="icon {size}" class:is-clickable={isClickable} on:click>
    <svg style={styleString} viewBox="0 0 24 24">
        <path d={path} />
    </svg>
</span>

<!-- <style>
    svg {
        display: inline-block;
        vertical-align: middle;

    }
</style> -->