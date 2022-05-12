const approvedOrNot = (average) => {
	if (average < 7) return 'Reprovado!';
	return 'Aprovado!';
}

export default approvedOrNot;