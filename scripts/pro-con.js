module.exports = function proConTag(args, content) {
    const pros = []
    const cons = []

    // Extract pros and cons into their own lists
    content.split('\n').forEach(item => {
        if (item.startsWith("+ ")) {
            pros.push(item.substring(2))
        } else if (item.startsWith("- ")) {
            cons.push(item.substring(2))
        }
    })

    // Return an html tree containing all pros and cons
    return `
      <div>
        <h4>Pro's and Cons</h4>
        <div class="grid gap-4">
          <ul class="procon pro">
            ${pros.map(pro => `<li>${pro}</li>`).join('')}
          </ul>
          <ul class="procon con">
            ${cons.map(con => `<li>${con}</li>`).join('')}
          </ul>
        </div>
      </div>`
}
