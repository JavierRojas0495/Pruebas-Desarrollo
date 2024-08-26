<?php
session_start();
if (!isset($_SESSION['name'])) {
    header('Location: login.php');
    exit;
}

include_once '../lib/helpers.php';
include_once '../view/Partials/head.php';
?>
<body>
    <div id="wrapper">
        <!-- Navigation -->
        <?php include_once '../view/Partials/sidebar-left.php'; ?>

        <div class="container-fluid" id="content-wrapper">
            <?php include_once '../view/Partials/navbar.php'; ?>

            <div class="container d-flex flex-column col-lg-12 mx-3">
                <div id="page-wrapper">
                    <div class="container-fluid">
                        <!-- Card for dynamic content -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Dashboard</h6>
                            </div>
                            <div class="card-body">
                                <?php
                                if (isset($_GET['modulo'])) {
                                    resolve();
                                } else {
                                    include_once '../view/Partials/dashboard.php';
                                }
                                ?>
                            </div>
                        </div>
                        <!-- End of card -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php include_once '../view/Partials/footer.php'; ?>
</body>
</html>
