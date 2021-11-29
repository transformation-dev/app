<script>
    export let path
    export let size = ''

    export let isClickable = false
    export let isLeft = false
    export let isRight = false
    
    let styleString = '1.5rem; height:1.5rem'
    $: {
        switch (size) {
            case 'is-small':
                styleString = '1rem; height:1rem'
                break
            case 'is-medium':
                styleString = '2rem; height:2rem'
                break
            case 'is-large':
                styleString = '3rem; height:3rem'
                break
            default:
                styleString = '1.5rem; height:1.5rem'
        }
    }
</script>

<span class="icon {size} {(isLeft && 'is-left') || ''} {(isRight && 'is-right') || ''}" class:is-clickable={isClickable} on:click>
    <svg style={styleString} viewBox="0 0 24 24">
        <path fill="#000000" d={path} />
    </svg>
</span>