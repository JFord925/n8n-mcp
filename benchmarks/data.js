window.BENCHMARK_DATA = {
  "lastUpdate": 1754330649267,
  "repoUrl": "https://github.com/JFord925/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "035c4a349e848baa04b36f4bffdd47f7cad0325d",
          "message": "Merge pull request #121 from czlonkowski/fix/ci-skip-docs-only-changes\n\nfix: skip CI/CD workflows for documentation-only changes",
          "timestamp": "2025-08-02T22:57:58+02:00",
          "tree_id": "66a1b5b36de41b0594fb6e444df54baadb54bd06",
          "url": "https://github.com/JFord925/n8n-mcp/commit/035c4a349e848baa04b36f4bffdd47f7cad0325d"
        },
        "date": 1754330648807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0188,
            "unit": "ms",
            "range": 0.3406,
            "extra": "53248 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1491,
            "unit": "ms",
            "range": 0.5954999999999999,
            "extra": "318 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "unit": "ms",
            "range": 0.2829,
            "extra": "209106 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.067,
            "unit": "ms",
            "range": 0.31200000000000006,
            "extra": "14930 ops/sec"
          }
        ]
      }
    ]
  }
}