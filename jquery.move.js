$('#wrapper').kinetic();

                $('#left').click(function(){
                    $('#wrapper').kinetic('start', { velocity: -10 });
                });
                $('#right').click(function(){
                    $('#wrapper').kinetic('start', { velocity: 10 });
                });
                $('#end').click(function(){
                    $('#wrapper').kinetic('end');
                });
                $('#stop').click(function(){
                    $('#wrapper').kinetic('stop');
                });
                $('#detach').click(function(){
                    $('#wrapper').kinetic('detach');
                });
                $('#attach').click(function(){
                    $('#wrapper').kinetic('attach');
                });
