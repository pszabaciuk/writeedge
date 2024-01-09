export function isNullOrEmpty(
	input: FormDataEntryValue | null | undefined
): boolean {
	return input === null || input === undefined || input.toString() === '';
}
