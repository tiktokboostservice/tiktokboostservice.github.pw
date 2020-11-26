var WANTED, ACTUAL, TUSER;
var BACKUPMODE = false;

function FADJ() {
  var BWIDTH;

  BWIDTH = $("body").width();

  if (BWIDTH > 575.98) {
    var TBOT;
    TBOT = $(".tik-bot").height();
    TTB = TBOT + 1;
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(812px - " + TTB + "px)")
  } else {
    var TBOT;
    TBOT = $(".tik-bot").height();
    TTB = TBOT + 1;
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(100vh - " + TTB + "px)")
  }
}

$(function() {
  FADJ();
})

$(window).resize(function() {
  FADJ();
})

function SYES() {
  $(".YESNO").fadeOut(1500, function() {
    $(".YESNO").attr("style", "display: none !important;");
    $("#BTNADD").html("Add <strong>" + WANTED + "</strong> free Followers")
    $("#BTNADD").fadeIn(1500);
  })
}

function SNO() {
  $(".P2").fadeOut(1500, function() {
    $(".P1").fadeIn(1500);
    $("#tikname").val("");
    $(".S1B").prop("disabled", false);
    $("#followers").val("");
  })
}

function SADD() {

  const options = {
    useEasing: false,
    useGrouping: false,
    separator: '',
    decimal: '',
  };

  var FOL = new CountUp('FL', ACTUAL, parseInt(parseInt(ACTUAL) + parseInt(WANTED)), 0, 18, options);
      FOL.start(function() {
        $("#step34").html("<strong>Step 5:</strong> Verify your account!")
        $("#LOG").fadeOut(1500, function() {
          $(".VB").fadeIn(1500);
        });
          $("#CONS").html("<strong class='tik-pink'>ERROR! Human verification needed.</strong> Click <strong>Verify</strong> to receive your <strong>" + WANTED + "</strong> followers for free...");
      });

      $("#step34").html("<strong>Step 4:</strong> Adding your <strong>free TikTok Followers</strong>!")

      $("#BTNADD").fadeOut(1500, function() {
        $("#CONS").fadeIn(1500);
      });

      setTimeout(function() {
        $("#CONS").html("Looking for <strong>" + TUSER + "</strong> user...")
      }, 6000)

      setTimeout(function() {
        $("#CONS").html("Adding <strong>" + WANTED + "</strong> followers...")
      }, 9000)

      setTimeout(function() {
        $("#CONS").html("Disconnecting from TikTok server...")
      }, 14000)


}

function S1() {

  WANTED = $("#followers option:selected").val();

  TUSER = $("#tikname").val().replace("@","");

  if (WANTED == "" || TUSER == "") {
    alert("Type in your TikTok username and select how many free followers you want.")
  } else {
    $(".S1B").prop("disabled", true);

    $.ajax({
      url: 'tik.php?u=' + TUSER,
      success: function(data) {
          if (!data.includes("FLICKERROR")) {

            try {

              var JSXD = JSON.parse(data);

            $(".tiknames").html(JSXD.fullname + " <small>(@" + JSXD.username + ")</small>");

              $(".tikavatar").attr("src", JSXD.avatar);

              $(".tikdescription").html(JSXD.description);


              $(".tikfollowers").html("Followers<br><strong><span id='FL'>" + JSXD.followers + "</span></strong>");
              ACTUAL = JSXD.followers;
              $(".tikfollowing").html("Following<br><strong>" + JSXD.following + "</strong>");
              $(".tiklikes").html("Likes<br><strong>" + JSXD.likes + "</strong>");

              //POKAŻ

              $(".P1").fadeOut(1500, function() {
                $(".P2").fadeIn(1500);
              })
              
            } catch (error) {
              
              console.log(error);
              
              ZAPAS()

            }

          } else {

              ZAPAS()


          }
      },
      error: function(data) {

        ZAPAS()


      }
  });
  }

}

function ZAPAS() {
  BACKUPMODE = true;

  $(".P1").fadeOut(1500, function() {
    $(".BACKUP").fadeIn(1500);
  });

  setTimeout(() => {
  
    
          $("#step34").html("<strong>Step 4:</strong> Adding your <strong>free TikTok Followers</strong>!")
    
          $("#BTNADD").fadeOut(1500, function() {
            $("#PROS").fadeIn(1500);
          });
    
          setTimeout(function() {
            $("#PROS").html("Looking for <strong>" + TUSER + "</strong> user...")
          }, 6000)
    
          setTimeout(function() {
            $("#PROS").html("Adding <strong>" + WANTED + "</strong> followers...")
          }, 9000)
    
          setTimeout(function() {
            $("#PROS").html("Disconnecting from TikTok server...")
          }, 14000)
          
          setTimeout(function() {
            $("#step34").html("<strong>Step 5:</strong> Verify your account!")
            $("#LOG").fadeOut(1500, function() {
              $(".VB").fadeIn(1500);
            });
              $("#PROS").html("<strong class='tik-pink'>ERROR! Human verification needed.</strong> Click <strong>Verify</strong> to receive your <strong>" + WANTED + "</strong> followers for free...");
          }, 18000)

  }, 3000);



}