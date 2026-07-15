export function getMyAge(): number {
    const birth = new Date("2003-04-22");

    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    if (
        today.getMonth() < birth.getMonth() ||
        (today.getMonth() === birth.getMonth() &&
            today.getDate() < birth.getDate())
    ) {
        age--;
    }

    return age;
}