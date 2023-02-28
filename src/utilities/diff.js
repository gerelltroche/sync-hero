export default function diff(myList, theirList) {
	return [
		...myList.map((item) => ({
			name: item,
			unique: !theirList.includes(item)
		}))
	];
}
