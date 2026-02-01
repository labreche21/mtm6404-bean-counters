const rows = counters => counters.map(counter => `
        <tr>
          <td>${counter.index}</td>
          <td>${counter.name}</td>
          <td>${counter.bean}</td>
          <td>${counter.count}</td>
        </tr>
      `)
      .join('')


      const search = (counters, query) =>
        counters.filter(counter =>
          counter.name.toLowerCase().includes(query.toLowerCase()) ||
          counter.bean.toLowerCase().includes(query.toLowerCase())
        )

        const total = counters =>
            counters.reduce((sum, counter) => sum + counter.count, 0)

        const order = (counters, property) =>
            [...counters].sort((a, b) => {
              if (typeof a[property] === 'string') {
                return a[property].localeCompare(b[property])
              }
              return a[property] - b[property]
            })
            
            let sortState = {
                column: null,
                direction: 'asc' // 'asc' or 'desc'
              }
                                                  