<script>
    import { onMount } from "svelte";
    let secToMin = 1000;
    let { delay = 7 } = $props();
    delay = delay * secToMin;
    let images = ['/couple/couple_image.jpg', '/couple/0c4968db9ef82b81b8098cb98a74d5e9.jpg']

    onMount(async () => {
        const res = await fetch('/api/couple-images');
        images = await res.json();
    });
    console.log('all images : ', images)


    let imageSrc = $state(images[0]);
    let maxImage = images.length;
    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageSrc = images[currentImageIndex];
    }

    setTimeout(() => {
        setInterval(changeImage, delay); // Change image every 2 seconds
    }, 1000)

</script>

<img class="w-3xs xl:w-2xs shadow-md aspect-1/1 object-cover rounded-lg mx-auto" alt="The project logo" src={imageSrc} />