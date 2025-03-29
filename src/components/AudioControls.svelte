<script>
    import { VolumeOffFill, VolumeUpFill } from "svelte-bootstrap-icons";
    let { audioSrc = 'test.mp3' } = $props();
    let audio;
    let isPlaying = $state(false);
    let volume = 0.5;
    // let inputClass = "appearance-none bg-gray-500 outline-dark-700 cursor-pointer overflow-hidden w-full"
    let inputClass = "h-full align-middle justw-48 h-1 bg-gray-200 outline-dark-700 rounded-full appearance-none"

    const togglePlay =()=> {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
        console.log("isPlaying:", isPlaying);
    }

    function handleVolumeChange(event) {
        volume = event.target.value;
        if (audio) {
            audio.volume = volume;
        }
    }
</script>

<audio bind:this={audio} src={audioSrc} />

<div class="controls">
    <button on:click={togglePlay}>
       <label class="hover:text-gray-600">{isPlaying ? "Pause" : "Play"}</label>
    </button>
    <div class="volume-slider flex align-middle justify-center gap-2">
        <VolumeOffFill/>
        <input
        class={inputClass}
        type="range"
        min="0"
        max="1"
        step="0.01"
        bind:value={volume}
        on:input={handleVolumeChange}
    />
        <VolumeUpFill/>
    </div>

    
</div>

<style>
    .controls {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }

    input[type='range'] {
        width: 150px;
    }
</style>