var TESTS = [];

TESTS[0] = new Test("NIPT",
					new Timeframe(new GestationalAge(10, 0), null),
					null
					);
TESTS[1] = new Test("SIPS 1",
					new Timeframe(new GestationalAge(9, 0), new GestationalAge(13, 6)),
					new Timeframe(new GestationalAge(10, 0), new GestationalAge(11, 6))
					);
TESTS[2] = new Test ("Nuchal Translucency",
					new Timeframe(new GestationalAge(11, 0), new GestationalAge(13, 6)),
					new Timeframe(new GestationalAge(12, 0), new GestationalAge(13, 3))
					);
TESTS[3] = new Test ("SIPS 2 / QUAD ",
					new Timeframe(new GestationalAge(15, 0), new GestationalAge(20, 6)),
					new Timeframe(new GestationalAge(15, 2), new GestationalAge(16, 0))
					);
TESTS[4] = new Test("Amniocentesis",
					new Timeframe(new GestationalAge(15, 0), new GestationalAge(20, 0)),
					null
					);
TESTS[5] = new Test ("Detailed Ultrasound",
					new Timeframe(new GestationalAge(20, 0), null),
					null
					);
TESTS[6] = new Test ("Gestational Diabetes Screening",
					new Timeframe(new GestationalAge(24, 0), new GestationalAge(28, 0)),
					null
					);
TESTS[7] = new Test ("Third Trimester CBC",
					new Timeframe(new GestationalAge(30, 0), null),
					null
					);
TESTS[8] = new Test ("GBS Swab",
					new Timeframe(new GestationalAge(35, 0), new GestationalAge(37, 0)),
					null
					);

function Test(name, timeframe, bestTimeframe) {
	this.name = name;
	this.timeframe = timeframe;
	this.bestTimeframe = bestTimeframe;
}

// References:
//		http://www.bcprenatalscreening.ca/sites/prenatal2/files/GuidelineMarch.pdf
