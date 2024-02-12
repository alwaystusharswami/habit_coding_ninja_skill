{
  let createHabit = function () {
    let newHabit = $("#habit-create");
    newHabit.submit(function (e) {
      e.preventDefault();
      $.ajax({
        type: "post",
        url: "habit/create",
        data: newHabit.serialize(),
        success: function (data) {
          let newHabit = newHabitDom(data.data.habit);
          $("#habit").append(newHabit);
        },
        Error: function (error) {
          console.log(error);
        },
      });
    });
    let newHabitDom = function (habit) {
      return $(`
        
<div class="habit-box">
  <div>
    <h1>${habit.title}</h1>
    <h3>${habit.time}</h3>
  </div>
  <div>
    <form action="/habit/complete/${habit.id}" method="post">
      <input type="checkbox" name="complete" id="complete"
      value="${habit.complete}" onchange="this.form.submit()" ${habit.complete} ?
      'checked' : ''  />
    </form>
    <p>icon</p>
  </div>
  <div>
    <h1>${habit.day} days</h1>
    <h1>${habit.strike} best</h1>
    <h1>${habit.totalComplete}/${habit.totalDays}</h1>
    <h1>
      <a href="/habit/destroy/${habit.id}"><i class="fa-solid fa-circle-xmark"></i></a>
    </h1>
  </div>
</div>
`);
    };
  };
  createHabit();
}
