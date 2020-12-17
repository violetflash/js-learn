//многострочные функциональные выражения в аргументах
administer(
    patient,
    function (dosage) {
        if (dosage > 0) {
            inject(dosage);
        }
    },
    time);
