(function addSave() {

  function save() {
    function getLink(id) {
      const arr = [];
      const link = JSON.parse(localStorage.getItem(`links_${id}`));
      if (link) {
        for (let i = 0; i < link.length; i++) {
          arr[i] = link[i];
        }
      }
      console.log(arr);
      return arr;
    }

    const t1 = {
      id: "t1",
      b1: {
        name: localStorage.getItem("name_left_top"),
        theme: localStorage.getItem("theme_left_top"),
        links: getLink("left_top")
      },
      b2: {
        name: localStorage.getItem("name_right_top"),
        theme: localStorage.getItem("theme_right_top"),
        links: getLink("right_top")
      },
      b3: {
        name: localStorage.getItem("name_left_bot"),
        theme: localStorage.getItem("theme_left_bot"),
        links: getLink("left_bot")
      },
      b4: {
        name: localStorage.getItem("name_right_bot"),
        theme: localStorage.getItem("theme_right_bot"),
        links: getLink("right_bot")
      }
    };

    const t2 = {
      id: "t2",
      b1: {
        name: null,
        theme: null,
        links: []
      },
      b2: {
        name: null,
        theme: null,
        links: []
      },
      b3: {
        name: null,
        theme: null,
        links: []
      },
      b4: {
        name: null,
        theme: null,
        links: []
      }
    };

    const t3 = {
      id: "t3",
      b1: {
        name: null,
        theme: null,
        links: []
      },
      b2: {
        name: null,
        theme: null,
        links: []
      },
      b3: {
        name: null,
        theme: null,
        links: []
      },
      b4: {
        name: null,
        theme: null,
        links: []
      }
    };
    const t4 = {
      id: "t4",
      b1: {
        name: null,
        theme: null,
        links: []
      },
      b2: {
        name: null,
        theme: null,
        links: []
      },
      b3: {
        name: null,
        theme: null,
        links: []
      },
      b4: {
        name: null,
        theme: null,
        links: []
      }
    };


    const copyBox = document.createElement("textarea");
    const objData = {
      t1: JSON.stringify(t1),
      t2: JSON.stringify(t2),
      t3: JSON.stringify(t3),
      t4: JSON.stringify(t4)
    }

    document.querySelector("body").appendChild(copyBox);
    copyBox.value = JSON.stringify(objData);
    copyBox.select();
    document.execCommand('copy');
    copyBox.remove();
    alert("클립보드에 복사되었습니다");
  };
  document.querySelector(".save").addEventListener("click", save);
})();
