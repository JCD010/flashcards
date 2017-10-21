<template lang="pug">
	.GenderPieChart
		h1 Gender Breakdown
		form.gender-form
			//- Total females
			input(
				placeholder="females"
				v-model.number="genderCount[0].count"
				type="number"
				id="totalFemales"
				class="js-user-input"
			)
			//- Total males
			input(
				placeholder="Enter total males"
				v-model.number="genderCount[1].count"
				name="males"
				type="number"
				id="totalMales"
				class="js-user-input"
			)
		pre {{ genderCount }}
		p {{ add(genderCount[0].count, genderCount[1].count) }}
		.pie
</template>

<script>
export default {
	name: 'hello',
	// mounted: function() {
	// 	require('../d3.js')
	// },
	data() {
		return {
			genderCount: [
				{
					label: 'Females',
					count: 0,
				}, {
					label: 'Males',
					count: 0,
				}],
		}
	},
	methods: {
		add: function(num1, num2) {
			return num1 + num2
		},
	},
}

// let elUserInputs = document.querySelectorAll('.js-user-input')

// var data = [
// 	{ label: 'F', count: 0 },
// 	{ label: 'M', count: 0 },
// ]

// console.log(data)

// var width = 300
// var height = 300
// var radius = Math.min(width, height) / 2

// var color = d3.scaleOrdinal()
// 	.range(["#2C93E8", "#838690", "#F56C4E"])

// var pie = d3.pie()
// 	.value(function(d) { return d.count })(data)

// var arc = d3.arc()
// 	.outerRadius(radius - 10)
// 	.innerRadius(1)

// var labelArc = d3.arc()
// 	.outerRadius(radius - 40)
// 	.innerRadius(radius - 40)

// var svg = d3.select("#pie")
// 	.append("svg")
// 	.attr("width", width)
// 	.attr("height", height)
// 		.append("g")
// 		.attr("transform", "translate(" + width / 2 + "," + height / 2 + " ) ")

// var g = svg.selectAll("arc")
// 	.data(pie)
// 	.enter().append("g")
// 	.attr("class", "arc")

// g.append("path")
// 	.attr("d", arc)
// 	.style("fill", function(d) { return color(d.data.label) })

// g.append("text")
// 	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")" })
// 	.text(function(d) { return d.data.label })
// 	.style("fill", "#fff")



// function getTotalFemales() {
// 	let total = document.getElementById('totalFemales').value
// 	return (parseFloat(total))
// }

// function getTotalMales() {
// 	let total = document.getElementById('totalMales').value
// 	return (parseFloat(total))
// }

// function updateValues() {
// 	data[0].count = getTotalFemales()
// 	data[1].count = getTotalMales()

// 	var pie = d3.pie()
// 		.value(function(d) { return d.count })(data)
// 	path = d3.select("#pie").selectAll("path").data(pie) // Compute the new angles
// 	path.attr("d", arc) // redrawing the path
// 	d3.selectAll("text").data(pie).attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")" }) // recomputing the centroid and translating the text accordingly.

// 	console.log(data)
// }

// elUserInputs.forEach(function(el) {
// 	el.addEventListener('keyup', function(event) {
// 		// draw()
// 		updateValues()
// 	})
// })

// update();

// var d3 = require('../d3.js')

// let width = 960
// let height = 500
// let radius = Math.min(width, height) / 2

// var color = d3.scale.ordinal()
// 	.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"])

// var arc = d3.svg.arc()
// 	.outerRadius(radius - 10)
// 	.innerRadius(0)

// var pie = d3.layout.pie()
// 	.sort(null)
// 	.value(function(d) { return d.genderCount })

// var svg = d3.select(".pie").append("svg")
// 	.attr("width", width)
// 	.attr("height", height)
// 	.append("g")
// 	.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

// this.genderCount.forEach(function(d) {
// 	d.val = +d.val
// })

// var g = svg.selectAll(".arc")
// 	.data(pie(this.genderCount))
// 	.enter().append("g")
// 	.attr("class", "arc")

// g.append("path")
// 	.attr("d", arc)
// 	.style("fill", function(d) { return color(d.genderCount.val); });

</script>

<style lang="scss" scoped>
.GenderPieChart {
	width: 90vw;
	max-width: 960px;
	margin: 0 auto;
}
</style>
