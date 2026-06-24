const requests = new Map<string, { count: number; time: number }>();

export function rateLimit(ip: string, limit = 3, windowMs = 60_000) {
    const now = Date.now();
    const record = requests.get(ip);

    if (!record) {
        requests.set(ip, { count: 1, time: now });
        return true;
    }

    if (now - record.time > windowMs) {
        requests.set(ip, { count: 1, time: now });
        return true;
    }

    if (record.count >= limit) {
        return false;
    }

    record.count += 1;
    return true;
}