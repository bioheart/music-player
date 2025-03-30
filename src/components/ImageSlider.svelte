<script>
    import { onMount } from "svelte";
    let secToMin = 1000;
    let { delay = 5 } = $props();
    delay = delay * secToMin;
    let images = ['/couple/couple_image.jpg']
    let imageSrc = $state(images[0]);
    let currentImageIndex = 0;

    onMount(async () => {
        const res = await fetch('/api/couple-images');
        images = await res.json();
        console.log('images.length : ', images.length);
        if(images.length > 1){
            setTimeout(() => {
                setInterval(changeImage, delay); // Change image every 2 seconds
            }, 50)
        }
    });
    
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageSrc = images[currentImageIndex];
    }

</script>

<img class="w-3xs xl:w-2xs shadow-md aspect-1/1 object-cover rounded-lg mx-auto" alt="The project logo" src={imageSrc} />