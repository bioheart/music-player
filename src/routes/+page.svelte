<script>
    import AudioControls from '../components/AudioControls.svelte';
    import ImageSlider from '../components/ImageSlider.svelte';
</script>

<div class="music-player flex flex-col justify-items-center w-90/100 xl:w-30/100">
    <div class='headers flex flex-row place-content-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-heart-fill" viewBox="0 0 16 16">
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
        </svg>
        <label class="header-text xl:w-80 text-center cute-font-regular text-sm xl:text-xl"> To my future girlfriend ✨</label>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-player" viewBox="0 0 16 16">
            <path d="M4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1 0v3h6V3zm3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            <path d="M11 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
        </svg>
    </div>
    <div class='content justify-items-center items-center'>
        <div class="loader w-50 h-50">
            <div class="red bar"></div>
            <div class="orange bar"></div>
            <div class="yellow bar"></div>
            <div class="green bar"></div>
            <div class="blue bar"></div>
            <div class="violet bar"></div>
        </div>
        <ImageSlider></ImageSlider>
        <AudioControls audioSrc="/song.mp3"></AudioControls>
        <p class="text-center cute-font-regular text-l text-purple-800">
            You will get the best version of me 💖,
        </p>
        <p class="cute-text-regular text-l text-center text-fuchsia-600">🎶 perhaps even this melody</p>
        <a href="https://www.youtube.com/watch?v=MaeX5dV0njY" target="_blank" >
            <div class="w-full mx-auto flex flex-row justify-content-center items-center" >
                <span class="mr-1 sriracha-regular hover:text-pink-400 text-pink-800 text-sm xl:text-base">ถ้าโลกนี้ไม่ใจดีกับเธอ เดี๋ยวเราใจดีกับเธอแทน</span>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 -7 48 48" version="1.1">
                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Color-" transform="translate(-200.000000, -368.000000)" fill="#CE1312">
                            <path d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </a>
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    :global(html) {
    background-color: theme(--color-gray-100);
    }
</style>